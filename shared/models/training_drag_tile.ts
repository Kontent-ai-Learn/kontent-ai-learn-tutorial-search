
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class TrainingDragTile extends ContentItem {
    public adaptComponentTitleTitle!: Elements.TextElement;
    public content!: Elements.RichTextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'adapt_component_title__title') {
                    return 'adaptComponentTitleTitle';
                }
                return elementName;
            })
        });
    }
}
