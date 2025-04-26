import Stack from "@/components/common/Stack";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function StudyPage() {
  return (
    <Wrapper className="pb-20">
      <Stack.V className="w-full h-full rounded-lg p-2 mt-4 bg-stone-200">
        <StudyCard />
        <StudyCard />
        <StudyCard />
        <StudyCard />

        <StudyCard />
        <StudyCard />
        <StudyCard />
        <StudyCard />
      </Stack.V>
    </Wrapper>
  );
}

function StudyCard({
  id = "1",
  title = "lorem ipsum",
  description = "dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  member_current = 3,
  member_max = 8,
  status = "모집중",
}: {
  id?: string;
  title?: string;
  description?: string;
  member_current?: number;
  member_max?: number;
  status?: string;
}) {
  return (
    <Stack.V className="w-full h-auto rounded-lg p-2 bg-stone-300">
      <Stack.V className="w-full h-24 rounded-lg p-2 bg-neutral-200 ">
        <Link href={`/study/${id}`}>
          <p className="rounded-lg text-semibold">{title}</p>
          <div className="rounded-lg text-sm">{description}</div>
        </Link>
      </Stack.V>
      <Stack.H className="w-full h-8 px-2" justify="between">
        <div>{`${member_current}/${member_max}`}</div>
        <div>{status}</div>
      </Stack.H>
    </Stack.V>
  );
}
