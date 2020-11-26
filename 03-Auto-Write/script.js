const text =
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. ';
const textBox = document.querySelector('.text-box');

let index = 0;
function autoWrite() {
  textBox.innerHTML = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }
}
setInterval(autoWrite, 200);
