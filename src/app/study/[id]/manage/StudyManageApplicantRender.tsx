"use client";

import Title from "@/components/common/Title";
import Stack from "@/components/common/Stack";
import CheckboxLayout from "@/components/layout/CheckboxLayout";
import { Applicant } from "@/types/entity/Applicant";
import Text from "@/components/common/Text";

export default function StudyManageApplicantRender({ applicants }: { applicants: Applicant[] }) {
  return (
    <Stack.H className="w-full p-4 rounded-xl bg-my-background-2">
      {applicants.map((applicant) => (
        <>
          <Stack.V className="w-1/12">
            <CheckboxLayout className="w-full h-full rounded-lg bg-white" onChange={() => {}} />
          </Stack.V>
          <Stack.V className="w-full">
            <Title.h4>{applicant.name}</Title.h4>
            <Text.sm>
              {applicant.phone}
              <br />
              {applicant.description}
            </Text.sm>
          </Stack.V>
        </>
      ))}
    </Stack.H>
  );
}
