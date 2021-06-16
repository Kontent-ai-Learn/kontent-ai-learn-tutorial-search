
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class TrainingAccordionItem extends ContentItem {
    public content!: Elements.RichTextElement;
    public image!: Elements.AssetsElement;
    public title!: Elements.TextElement;
    public imagePosition!: Elements.MultipleChoiceElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'image_position') {
                    return 'imagePosition';
                }
                return elementName;
            })
        });
    }
}
