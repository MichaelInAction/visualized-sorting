/* Components */
import { Counter } from "./components/Counter/Counter";
import { SortingList } from "@/app/components/SortingList/SortingList";

export default function IndexPage() {
  return <SortingList />;
}

export const metadata = {
  title: "Visualized Sorting",
};
