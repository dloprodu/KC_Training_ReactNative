/** 
 *  @class Comic
 *  @type {Object}
 */
export class Comic {
    /**
     * The unique ID of the comic resource.
     * 
     * @type {number}
     */
    id;

    /**
     * The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.
     * 
     * @type {number}
     */
    digitalId;

    /**
     * The canonical title of the comic.
     *
     * @type {string}
     */
    title;

    /**
     * The number of the issue in the series (will generally be 0 for collection formats).
     * 
     * @type {number}
     */
    issueNumber;	

    /**
     * If the issue is a variant (e.g. an alternate cover, second printing, or director's cut), a text description of the variant.
     * 
     * @type {string}
     */
    variantDescription;

    /**
     * The preferred description of the comic.
     * 
     * @type {string}
     */
    description;

    /**
     * The date the resource was most recently modified.
     * 
     * @type {Date}
     */
    modified;

    /**
     * The ISBN for the comic (generally only populated for collection formats).
     * 
     * @type {string}
     */
    isbn;

    /**
     * The UPC barcode number for the comic (generally only populated for periodical formats).
     * 
     * @type {string}
     */
    upc;

    /**
     * The Diamond code for the comic.
     * 
     * @type {string}
     */
    diamondCode;

    /**
     * The EAN barcode for the comic.
     * 
     * @type {string}
     */
    ean;

    /**
     * The ISSN barcode for the comic.
     * 
     * @type {string}
     */
    issn;

    /**
     * The publication format of the comic e.g. comic, hardcover, trade paperback.
     * 
     * @type {string}
     */
    format;

    /**
     * The number of story pages in the comic.
     * 
     * @type {number}
     */
    pageCount;

    /**
     * A set of descriptive text blurbs for the comic.
     * 
     * @type {TextObject[]}
     */
    textObjects;

    /**
     * The canonical URL identifier for this resource.
     * 
     * @type {string}
     */
    resourceURI;

    /**
     * A set of public web site URLs for the resource.
     * 
     * @type {Url[]}
     */
    urls;

    /**
     * A summary representation of the series to which this comic belongs.
     * 
     * @type {SeriesSummary}
     */
    series;

    /**
     * A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).
     * 
     * @type {ComicSummary[]}
     */
    variants;

    /**
     * A list of collections which include this comic (will generally be empty if the comic's format is a collection).
     * 
     * @type {ComicSummary[]}
     */
    collections;

    /**
     * A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").
     * 
     * @type {ComicSummary[]}
     */
    collectedIssues;

    /**
     * A list of key dates for this comic.
     * 
     * @type {ComicDate[]}
     */
    dates;

    /**
     * A list of prices for this comic.
     * 
     * @type {ComicPrice[]}
     */
    prices;

    /**
     * The representative image for this comic.
     * 
     * @type {Image}
     */
    thumbnail;

    /**
     * A list of promotional images associated with this comic.
     * 
     * @type {Image[]}
     */
    images;

    /**
     * A resource list containing the creators associated with this comic.
     * 
     * @type {ResourceList}
     */
    creators;	

    /**
     * A resource list containing the characters which appear in this comic.
     * 
     * @type {ResourceList}
     */
    characters;

    /**
     * A resource list containing the stories which appear in this comic.
     * 
     * @type {ResourceList}
     */
    stories;

    /**
     * A resource list containing the events in which this comic appears.
     * 
     * @type {ResourceList}
     */
    events;
}
