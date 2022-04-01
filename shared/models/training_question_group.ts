
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class TrainingQuestionGroup extends ContentItem {
    public numberOfQuestions!: Elements.NumberElement;
    public questions!: Elements.LinkedItemsElement<ContentItem>;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'number_of_questions') {
                    return 'numberOfQuestions';
                }
                return elementName;
            })
        });
    }
}
