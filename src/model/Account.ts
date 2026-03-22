import { Model } from "@nozbe/watermelondb";
import { text, field, nochange } from "@nozbe/watermelondb/decorators";

export default class Account extends Model {
  static table = "accounts";

  @nochange @field("created_at") createdAt!: Date;
  @nochange @field("updated_at") updatedAt!: Date;
  @text("name") name!: string;
  @field("cap") cap!: number;
  @field("tap") tap!: number;

  @nochange @field("user_id") userId!: string;
}
