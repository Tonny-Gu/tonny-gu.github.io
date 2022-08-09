/* global NexT, CONFIG */

document.addEventListener('page:loaded', () => {
  if (!CONFIG.page.comments) return;

  NexT.utils.loadComments('.utterances-container')
    .then(() => NexT.utils.getScript('https://giscus.app/client.js', {
      attributes: {
        async       : true,
        crossOrigin : 'anonymous',
        'data-repo' : "Tonny-Gu/blog_comments",
        'data-repo-id' : "MDEwOlJlcG9zaXRvcnkyMzMzNTc0OTM=",
        'data-category-id' : "DIC_kwDODejAtc4CA6hf",
        'data-mapping' : "pathname",
        'data-reactions-enabled' : "1",
        'data-emit-metadata' : "0",
        'data-input-position' : "bottom",
        'data-theme' : "light",
        'data-lang' : "en"
      },
      parentNode: document.querySelector('.utterances-container')
    }));
});
