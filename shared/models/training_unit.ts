
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class TrainingUnit extends ContentItem {
    public title!: Elements.TextElement;
    public description!: Elements.RichTextElement;
    public scoreToPass!: Elements.NumberElement;
    public pages!: Elements.LinkedItemsElement<ContentItem>;
    public course!: Elements.TaxonomyElement;
    public attemptsPerQuestion!: Elements.NumberElement;
    public answersOrder!: Elements.MultipleChoiceElement;
    public courseId!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'score_to_pass') {
                    return 'scoreToPass';
                }
                if (elementName === 'attempts_per_question') {
                    return 'attemptsPerQuestion';
                }
                if (elementName === 'answers_order') {
                    return 'answersOrder';
                }
                if (elementName === 'course_id') {
                    return 'courseId';
                }
                return elementName;
            })
        });
    }
}
