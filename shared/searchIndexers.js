const getSearchIndex = require('./external/searchIndex');
const getKenticoClient = require('./external/kenticoClient');
const createIndexableArticleChunks = require('./utils/indexableArticleChunksCreator');
const resolveItemInRichText = require('./utils/richTextResolver');

async function reindexAllArticles() {
    await getSearchIndex().clearIndex();

    await getKenticoClient()
        .items()
        .type('article')
        .queryConfig({
            richTextResolver: resolveItemInRichText
        })
        .getPromise()
        .then(response =>
            response.items.forEach(article => resolveAndIndexArticle(article)));
}

async function reindexSpecificArticles(codenames) {
    await codenames.map(codename => getSearchIndex().deleteBy({
        filters: `codename:${codename}`
    }));

    await codenames.forEach(
         codename => getKenticoClient()
            .item(codename)
            .queryConfig({
                richTextResolver: resolveItemInRichText
            })
            .getPromise()
            .then(response => resolveAndIndexArticle(response.item)));
}

async function resolveAndIndexArticle(article) {
    if (article.content) {
        const articleWithResolvedRichTextComponents = {
            ...article,
            content: {
                value: article.content.getHtml()
            }
        };
        const articleChunks = createIndexableArticleChunks(articleWithResolvedRichTextComponents);
        await getSearchIndex().saveObjects(articleChunks);
    }
}

module.exports = {
    reindexAllArticles,
    reindexSpecificArticles
};
