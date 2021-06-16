
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.2.0'
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class MultiplatformArticle extends ContentItem {
    public children!: Elements.LinkedItemsElement<ContentItem>;
    public topics!: Elements.LinkedItemsElement<ContentItem>;
    public title!: Elements.TextElement;
    public url!: Elements.UrlSlugElement;
}
