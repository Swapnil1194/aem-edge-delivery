export default function decorate(block) {
    debugger;
    const [bg, fg] = block.children;
    bg.className = 'bg';
    fg.className = 'fg';
}