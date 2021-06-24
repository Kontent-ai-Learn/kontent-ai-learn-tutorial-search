
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class TrainingNarrativeItem extends ContentItem {
    public body!: Elements.RichTextElement;
    public codeSample!: Elements.RichTextElement;
    public image!: Elements.AssetsElement;
    public title!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'code_sample') {
                    return 'codeSample';
                }
                return elementName;
            })
        });
    }
}