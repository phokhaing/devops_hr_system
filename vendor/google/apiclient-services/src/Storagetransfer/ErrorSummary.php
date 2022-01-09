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

namespace Google\Service\Storagetransfer;

class ErrorSummary extends \Google\Collection
{
  protected $collection_key = 'errorLogEntries';
  public $errorCode;
  public $errorCount;
  protected $errorLogEntriesType = ErrorLogEntry::class;
  protected $errorLogEntriesDataType = 'array';

  public function setErrorCode($errorCode)
  {
    $this->errorCode = $errorCode;
  }
  public function getErrorCode()
  {
    return $this->errorCode;
  }
  public function setErrorCount($errorCount)
  {
    $this->errorCount = $errorCount;
  }
  public function getErrorCount()
  {
    return $this->errorCount;
  }
  /**
   * @param ErrorLogEntry[]
   */
  public function setErrorLogEntries($errorLogEntries)
  {
    $this->errorLogEntries = $errorLogEntries;
  }
  /**
   * @return ErrorLogEntry[]
   */
  public function getErrorLogEntries()
  {
    return $this->errorLogEntries;
  }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(ErrorSummary::class, 'Google_Service_Storagetransfer_ErrorSummary');