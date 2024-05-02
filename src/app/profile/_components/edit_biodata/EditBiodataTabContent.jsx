import React, { Suspense } from "react";

import {
  PersonalInformation,
  Address,
  FamilyInformation,
  OccuptionalInformation,
  MarriageInformation,
  Membership,
  Expected,
  Pledge,
  Contact,
} from "..";
import PersonalInformation from "./editbiodata-content/PersonalInformation";
import Address from "./editbiodata-content/Address";
import FamilyInformation from "./editbiodata-content/FamilyInformation";
import OccuptionalInformation from "./editbiodata-content/OccuptionalInformation";
import MarriageInformation from "./editbiodata-content/MarriageInformation";
import Membership from "./editbiodata-content/Membership";
import Expected from "./editbiodata-content/Expected";
import Contact from "./editbiodata-content/Contact";
import Pledge from "./editbiodata-content/Pledge";

export default function EditBiodataTabContent({ value, setValue }) {
  return (
    <Suspense fallback={<Loading />}>
      {value === "personal_information" && (
        <PersonalInformation setValue={setValue} />
      )}
      {value === "address" && <Address setValue={setValue} />}
      {value === "education" && <MissionStatement setValue={setValue} />}
      {value === "family" && <FamilyInformation setValue={setValue} />}
      {value === "personal" && <PersonalInformation setValue={setValue} />}
      {value === "occupational" && (
        <OccuptionalInformation setValue={setValue} />
      )}
      {value === "marriage" && <MarriageInformation setValue={setValue} />}
      {value === "member" && <Membership setValue={setValue} />}
      {value === "expected" && <Expected setValue={setValue} />}
      {value === "pledge" && <Pledge setValue={setValue} />}
      {value === "contact" && <Contact setValue={setValue} />}
    </Suspense>
  );
}
