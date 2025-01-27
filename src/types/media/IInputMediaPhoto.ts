import { IMessageEntity } from "..";
import { LocalFile } from "../../structure";

export interface IInputMediaPhoto {
  /**
   * Type of the result, must be photo
   */
  type: string;
  /**
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
   */
  media: string | LocalFile;
  /**
   * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
   */
  caption: string;
  /**
   * Optional. Mode for parsing entities in the photo caption.
   */
  parse_mode: "MarkdownV2" | "HTML" | "Markdown";
  /**
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
   */
  caption_entities: IMessageEntity[];
}
