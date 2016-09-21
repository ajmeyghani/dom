import dom from './dom';

if (IS_DEV) {
  document.addEventListener('DOMContentLoaded', () => {
    const hello = dom().make('div')
      .inner('<h1>hello world </h1>')
      .nodes();

    const body = dom().get('body').nodes()[0];
    body.appendChild(hello);
  });
}

export default dom;
