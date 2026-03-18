import { allocationsCollection } from "@/db";
import Allocation from "@/model/Allocation";
import { withObservables } from "@nozbe/watermelondb/react";
import { FlatList } from "react-native";
import AllocationItem from "./allocation-item";
import { Q } from "@nozbe/watermelondb";

interface Props {
  allocations: Allocation[];
}

function AllocationsList({ allocations }: Props) {
  return (
    <FlatList
      data={allocations}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => <AllocationItem allocation={item} />}
    />
  );
}

const enhance = withObservables([], () => ({
  allocations: allocationsCollection.query(Q.sortBy("created_at", Q.desc)),
}));

export default enhance(AllocationsList);
