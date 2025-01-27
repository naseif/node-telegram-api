import { IChat, IUser } from "..";

export interface IGiveawayWinners {
  /**
   * The chat that created the giveaway
   */
  chat: IChat;
  /**
   * Identifier of the message with the giveaway in the chat
   */
  giveaway_message_id: number;
  /**
   * Point in time (Unix timestamp) when winners of the giveaway were selected
   */
  winners_selection_date: number;
  /**
   * Total number of winners in the giveaway
   */
  winner_count: number;
  /**
   * List of up to 100 winners of the giveaway
   */
  winners: IUser[];
  /**
   * Optional. The number of other chats the user had to join in order to be eligible for the giveaway
   */
  additional_chat_count?: number;
  /**
   * Optional. The number of Telegram Stars that were split between giveaway winners; for Telegram Star giveaways only
   */
  prize_star_count?: number;
  /**
   * Optional. The number of months the Telegram Premium subscription won from the giveaway will be active for; for Telegram Premium giveaways only
   */
  premium_subscription_month_count?: number;
  /**
   * Optional. Number of undistributed prizes
   */
  unclaimed_prize_count?: number;
  /**
   * Optional. True, if only users who had joined the chats after the giveaway started were eligible to win
   */
  only_new_members?: true;
  /**
   * Optional. True, if the giveaway was canceled because the payment for it was refunded
   */
  was_refunded?: true;
  /**
   * Optional. Description of additional giveaway prize
   */
  prize_description?: string;
}
