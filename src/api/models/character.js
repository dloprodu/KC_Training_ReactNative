/** 
 *  @class Character
 *  @type {Object}
 */
export class Character {
  /**
   * The unique ID of the character resource.
   *
   * @type {number}
   */
  id;

  /**
   * The name of the character.
   *
   * @type {string}
   */
  name;

  /**
   * A short bio or description of the character.
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
   * The representative image for this character.
   * 
   * @type {Image}
   */
  thumbnail;

  /**
   * A resource list containing comics which feature this character.
   * 
   * @type {ResourceList}
   */
  comics;

  /**
   * A resource list of stories in which this character appears.
   * 
   * @type {ResourceList}
   */
  stories;

  /**
   * A resource list of events in which this character appears.
   * 
   * @type {ResourceList}
   */
  events;

  /**
   * A resource list of series in which this character appears.
   * 
   * @type {ResourceList}
   */
  series;
}
