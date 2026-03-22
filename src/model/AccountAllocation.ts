import Account from "@/model/Account";
import Allocation from "@/model/Allocation";
import { Model, Relation } from "@nozbe/watermelondb";
import {
  field,
  immutableRelation,
  nochange,
  readonly,
} from "@nozbe/watermelondb/decorators";

export default class AccountAllocation extends Model {
  static table = "account_allocations";
  static associations = {
    allocations: { type: "belongs_to" as const, key: "allocation_id" },
    accounts: { type: "belongs_to" as const, key: "account_id" },
  };

  @readonly @field("created_at") createdAt!: Date;
  @readonly @field("updated_at") updatedAt!: Date;
  @field("amount") amount!: number;
  @field("cap") cap!: number;
  @nochange @field("user_id") userId!: string;

  @immutableRelation("accounts", "account_id") account!: Relation<Account>;
  @immutableRelation("allocations", "allocation_id")
  allocation!: Relation<Allocation>;
}
