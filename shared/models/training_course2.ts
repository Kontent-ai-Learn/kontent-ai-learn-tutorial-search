
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class TrainingCourse2 extends ContentItem {
    public nextInPath!: Elements.LinkedItemsElement<ContentItem>;
    public url!: Elements.UrlSlugElement;
    public displayOptions!: Elements.MultipleChoiceElement;
    public redirectUrls!: Elements.TextElement;
    public thumbnail!: Elements.AssetsElement;
    public orderOfAnswers!: Elements.MultipleChoiceElement;
    public courseSurvey!: Elements.LinkedItemsElement<ContentItem>;
    public title!: Elements.TextElement;
    public isFree!: Elements.MultipleChoiceElement;
    public duration!: Elements.NumberElement;
    public description!: Elements.RichTextElement;
    public pages!: Elements.LinkedItemsElement<ContentItem>;
    public personasTopicsTrainingPersona!: Elements.TaxonomyElement;
    public attemptsPerQuestion!: Elements.NumberElement;
    public personasTopicsTrainingTopic!: Elements.TaxonomyElement;
    public courseId!: Elements.TaxonomyElement;
    public talentlmsCourseId!: Elements.NumberElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'next_in_path') {
                    return 'nextInPath';
                }
                if (elementName === 'display_options') {
                    return 'displayOptions';
                }
                if (elementName === 'redirect_urls') {
                    return 'redirectUrls';
                }
                if (elementName === 'order_of_answers') {
                    return 'orderOfAnswers';
                }
                if (elementName === 'course_survey') {
                    return 'courseSurvey';
                }
                if (elementName === 'is_free') {
                    return 'isFree';
                }
                if (elementName === 'personas___topics__training_persona') {
                    return 'personasTopicsTrainingPersona';
                }
                if (elementName === 'attempts_per_question') {
                    return 'attemptsPerQuestion';
                }
                if (elementName === 'personas___topics__training_topic') {
                    return 'personasTopicsTrainingTopic';
                }
                if (elementName === 'course_id') {
                    return 'courseId';
                }
                if (elementName === 'talentlms_course_id') {
                    return 'talentlmsCourseId';
                }
                return elementName;
            })
        });
    }
}
