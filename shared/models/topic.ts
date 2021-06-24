
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Topic extends ContentItem {
    public children!: Elements.LinkedItemsElement<ContentItem>;
    public url!: Elements.UrlSlugElement;
    public title!: Elements.TextElement;
}