<?php
/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

namespace Google\Service\CustomSearchAPI;

class Promotion extends \Google\Collection
{
  protected $collection_key = 'bodyLines';
  protected $bodyLinesType = PromotionBodyLines::class;
  protected $bodyLinesDataType = 'array';
  public $displayLink;
  public $htmlTitle;
  protected $imageType = PromotionImage::class;
  protected $imageDataType = '';
  public $link;
  public $title;

  /**
   * @param PromotionBodyLines[]
   */
  public function setBodyLines($bodyLines)
  {
    $this->bodyLines = $bodyLines;
  }
  /**
   * @return PromotionBodyLines[]
   */
  public function getBodyLines()
  {
    return $this->bodyLines;
  }
  public function setDisplayLink($displayLink)
  {
    $this->displayLink = $displayLink;
  }
  public function getDisplayLink()
  {
    return $this->displayLink;
  }
  public function setHtmlTitle($htmlTitle)
  {
    $this->htmlTitle = $htmlTitle;
  }
  public function getHtmlTitle()
  {
    return $this->htmlTitle;
  }
  /**
   * @param PromotionImage
   */
  public function setImage(PromotionImage $image)
  {
    $this->image = $image;
  }
  /**
   * @return PromotionImage
   */
  public function getImage()
  {
    return $this->image;
  }
  public function setLink($link)
  {
    $this->link = $link;
  }
  public function getLink()
  {
    return $this->link;
  }
  public function setTitle($title)
  {
    $this->title = $title;
  }
  public function getTitle()
  {
    return $this->title;
  }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(Promotion::class, 'Google_Service_CustomSearchAPI_Promotion');
