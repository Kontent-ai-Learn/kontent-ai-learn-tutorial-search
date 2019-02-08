const indexers = require('../shared/searchIndexers');
const appKeys = require('../shared/external/keys');

function validateEvent(event) {
    return event.subject === 'initialize';
}

module.exports = async (context, eventGridEvent) => {
    if (validateEvent(eventGridEvent)) {
        appKeys.SetupConfiguration(eventGridEvent.isTest);
        await indexers.reindexAllArticles();
    } else {
        throw 'Validation failed. Unsupported event.';
    }
};
