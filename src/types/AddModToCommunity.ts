// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { PersonId } from "./PersonId";

export interface AddModToCommunity {
  community_id: CommunityId;
  person_id: PersonId;
  added: boolean;
  auth: string;
}
