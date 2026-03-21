import Account from "@/model/Account";
import Allocation from "@/model/Allocation";
import { Model } from "@nozbe/watermelondb";
import {
  field,
  immutableRelation,
  readonly,
} from "@nozbe/watermelondb/decorators";

export default class AccountAllocation extends Model {
  static table = "account_allocations";
  static associations = {
    allocations: { type: "belongs_to" as const, key: "allocation_id" },
    accounts: { type: "belongs_to" as const, key: "account_id" },
  };

  @readonly @field("created_at") createdAt!: number;
  @field("amount") amount!: number;
  @field("cap") cap!: number;

  @immutableRelation("accounts", "account_id") account!: Account;
  @immutableRelation("allocations", "allocation_id") allocation!: Allocation;
}
