import { IPhotoSize } from "../core";
/**
 * This object represents a general file (as opposed to photos, voice messages and audio files).
 */

export interface IDocument {
  /**
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;
  /**
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;
  /**
   * Optional. Document thumbnail as defined by sender
   */
  thumbnail?: IPhotoSize;
  /**
   * Optional. Original filename as defined by sender
   */
  file_name?: string;
  /**
   * Optional. MIME type of the file as defined by sender
   */
  mime_type?: string;
  /**
   * Optional. File size in bytes
   */
  file_size?: number;
}
