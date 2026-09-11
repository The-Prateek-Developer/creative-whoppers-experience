export default function ThemeScript() {
  const code = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('cw-theme');var light=t==='light';d.classList.toggle('dark',!light);d.classList.toggle('light',light);d.setAttribute('data-theme',light?'light':'dark');d.style.colorScheme=light?'light':'dark';}catch(e){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
