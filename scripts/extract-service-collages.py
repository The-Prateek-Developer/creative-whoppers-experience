"""Crop the photo collage from each service PDF page."""

from pathlib import Path

import pymupdf
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "images" / "services"

ED_PDF = ROOT / "Creative Whoppers_Experience Design.pdf"
CP_PDF = ROOT / "Creative Whoppers_Creative Production.pdf"

ED_PAGES = {
    8: "turnkey-event-management-production",
    9: "venue-hospitality-management",
    10: "event-branding-environmental-design",
    11: "event-production-technical-solutions",
    12: "food-beverage-management",
    13: "corporate-gifts-branded-packaging",
    16: "destination-programme-design",
    17: "themed-events-experience-design",
    18: "entertainment-live-experiences",
    19: "corporate-offsites-team-experiences",
    20: "tours-excursions-local-experiences",
    21: "off-property-events-destination-experiences",
}

CP_PAGES = {
    8: ["brand-films"],
    9: ["corporate-films"],
    10: ["documentary-films"],
    11: ["explainer-videos"],
    12: ["product-videos"],
    13: ["testimonial-videos"],
    14: ["podcast-production"],
    15: ["live-streaming"],
    16: ["reels-shorts"],
    17: ["video-audio-editing"],
    20: ["event-photography"],
    21: ["corporate-photography"],
    22: ["product-photography"],
    23: ["drone-photography"],
    26: ["motion-graphics"],
    27: ["2d-animation"],
    30: ["logo-design"],
    31: ["brand-identity"],
    32: ["visual-identity"],
    33: ["packaging-design"],
    34: ["company-profile-design"],
    35: ["brochure-design"],
    36: ["social-media-creatives"],
    37: ["illustration"],
    38: ["illustration"],
    39: ["illustration"],
    40: ["creative-campaign-design"],
    41: ["print-collateral"],
}

SCALE = 2.4
MAX_WIDTH = 2000
ED_CROP = pymupdf.Rect(68, 318, 1084, 738)


def collage_rect(page: pymupdf.Page, kind: str) -> pymupdf.Rect:
    if kind == "ed":
        return ED_CROP

    infos = [
        info
        for info in page.get_image_info()
        if info["width"] > 40 and info["height"] > 40
    ]
    safe = pymupdf.Rect(48, 220, 1104, 742)
    if not infos:
        return safe

    xs0 = min(info["bbox"][0] for info in infos)
    ys0 = min(info["bbox"][1] for info in infos)
    xs1 = max(info["bbox"][2] for info in infos)
    ys1 = max(info["bbox"][3] for info in infos)
    if ys0 < 180:
        ys0 = 228
    pad = 14
    return pymupdf.Rect(
        max(safe.x0, xs0 - pad),
        max(safe.y0, ys0 - pad),
        min(safe.x1, xs1 + pad),
        min(safe.y1, ys1 + pad),
    )


def save_crop(page: pymupdf.Page, rect: pymupdf.Rect, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    pix = page.get_pixmap(matrix=pymupdf.Matrix(SCALE, SCALE), clip=rect, alpha=False)
    image = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    if image.width > MAX_WIDTH:
        ratio = MAX_WIDTH / image.width
        image = image.resize(
            (MAX_WIDTH, max(1, int(image.height * ratio))),
            Image.Resampling.LANCZOS,
        )
    image.save(dest, "JPEG", quality=90, optimize=True)


def extract(pdf: Path, pages: dict, kind: str, folder: str) -> None:
    doc = pymupdf.open(pdf)
    counts: dict[str, int] = {}
    for number, slugs in pages.items():
        page = doc[number - 1]
        rect = collage_rect(page, kind)
        slug_list = slugs if isinstance(slugs, list) else [slugs]
        for slug in slug_list:
            counts[slug] = counts.get(slug, 0) + 1
            name = "collage.jpg" if counts[slug] == 1 else f"collage-{counts[slug]:02d}.jpg"
            dest = PUBLIC / folder / slug / name
            save_crop(page, rect, dest)
            print(f"{kind} p{number:02d} -> {dest.relative_to(ROOT)} {dest.stat().st_size // 1024}kb")
    doc.close()


if __name__ == "__main__":
    extract(ED_PDF, ED_PAGES, "ed", "experience-design")
    extract(CP_PDF, CP_PAGES, "cp", "creative-production")
