
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class TrainingUser extends ContentItem {
    public lastName!: Elements.TextElement;
    public email!: Elements.TextElement;
    public firstName!: Elements.TextElement;
    public reason!: Elements.RichTextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'last_name') {
                    return 'lastName';
                }
                if (elementName === 'first_name') {
                    return 'firstName';
                }
                return elementName;
            })
        });
    }
}
