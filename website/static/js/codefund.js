// add the codefund div
// funds generated from codefund ad revenue are sent directly to the
// Testing Library open collective which are used to help support the project.
document.addEventListener('DOMContentLoaded', () => {
  const post = document.querySelector('.mainContainer .wrapper .post')
  if (!post) {
    // we only put the ad on pages that have a "post"
    return
  }
  const codefundDiv = document.createElement('div')
  codefundDiv.id = 'codefund-container'
  codefundDiv.innerHTML = `
    <div id="codefund">
      <div>
        Testing Library loads relevant ethical ads via <a href="https://codefund.io" rel="noopener noreferrer">CodeFund.io</a>.
        The funds are contributed to <a href="https://opencollective.com/testing-library" rel="noopener noreferrer">our Open Collective</a>.
        Please disable your ad blocker for testing-library.com
      </div>
    </div>
  `
  post.prepend(codefundDiv)

  const scriptEl = document.createElement('script')
  scriptEl.src = 'https://codefund.io/properties/389/funder.js'
  document.body.appendChild(scriptEl)
})
