
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class TrainingVideoV2 extends ContentItem {
    public adaptComponentTitleTitle!: Elements.TextElement;
    public adaptProgressSettingsAdjustProgressSettings!: Elements.MultipleChoiceElement;
    public description!: Elements.RichTextElement;
    public displayoptionsCssClasses!: Elements.TaxonomyElement;
    public video!: Elements.CustomElement;
    public displayoptionsLayout!: Elements.MultipleChoiceElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'adapt_component_title__title') {
                    return 'adaptComponentTitleTitle';
                }
                if (elementName === 'adapt_progress_settings__adjust_progress_settings') {
                    return 'adaptProgressSettingsAdjustProgressSettings';
                }
                if (elementName === 'displayoptions__css_classes') {
                    return 'displayoptionsCssClasses';
                }
                if (elementName === 'displayoptions__layout') {
                    return 'displayoptionsLayout';
                }
                return elementName;
            })
        });
    }
}