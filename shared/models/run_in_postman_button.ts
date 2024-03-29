
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class RunInPostmanButton extends ContentItem {
    public environmentId!: Elements.TextElement;
    public collectionUrl!: Elements.TextElement;
    public collectionId!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'environment_id') {
                    return 'environmentId';
                }
                if (elementName === 'collection_url') {
                    return 'collectionUrl';
                }
                if (elementName === 'collection_id') {
                    return 'collectionId';
                }
                return elementName;
            })
        });
    }
}
