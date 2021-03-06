import React from "react"
import { withPrefix } from "gatsby"
import { PageWithSideMenu } from "../../../components/pagelayouts/pagewithsidemenu"
import InsetText from "nhsuk-react-components/lib/components/inset-text"
import Image from "nhsuk-react-components/lib/components/image"
import Pagination from "nhsuk-react-components/lib/components/pagination"
import "../../index.scss"

const Page = ({ children }) => (
  <PageWithSideMenu
    sidemenu={{
      items: [
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/overview"),
          label: "Overview",
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/vision"),
          label: "Vision",
        },
        {
          url: "#top",
          label: "Scope",
          selected: true,
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/mandatory_events"),
          label: "Mandatory Events",
        },
      ],
    }}
    breadcrumb={{
      items: [
        {
          url: withPrefix("/rfcs"),
          label: "RFCs",
        },
        {
          url: withPrefix("/rfcs/RFC0001_gp2gp_mi/overview"),
          label: "RFC0001 GP2GP MI",
        },
      ],
    }}
  >
    <InsetText>
      <p>
        This RFC is currently 'Being discussed'. As such, it may be undergoing
        significant change and should not be used as the basis of an
        implementation at the moment. If you want to have your say and
        contribute to this RFC then go to our{" "}
        <a
          href="https://github.com/nhsconnect/prm-external-developer-website/issues/1"
          title="External website where RFC comments are allowed"
        >
          Github site
        </a>
        .
      </p>
    </InsetText>
    <h1>RFC0001 GP2GP MI</h1>
    <h2>Scope</h2>
    <p>
      We believe that initially, we should focus on the areas where we want to
      gather new information first, to prove out thhe solution, as such we will
      be focusing on the events around when the EHR is sent, and then when then
      EHR is received.
    </p>
    <Image
      src="/RFC0001_gp2gp_mi/scope_example.png"
      alt="Highlighting the area of focus for this RFC around the EHR being sent and received"
      caption="Our area of focus around the EHR being sent and received"
      className="image-fullwidth"
    />
    <p>
      As well as moving to events, we wish to collect additional data that is
      not currently in the MI for those events, including:
    </p>
    <h3>Sending Practice specific</h3>
    <ul>
      <li>
        For each attachment that is in the EHR:
        <ul>
          <li>Size</li>
          <li>Type</li>
          <li>
            Code recorded in the EHR by the GP practice for that attachment
          </li>
        </ul>
      </li>
      <li>Whether that attachment was included in thhe GP2GP message</li>
      <li>Usage of 'Placeholders' when attachments are not sent</li>
    </ul>
    <h3>Recieving Practice specifc</h3>
    <ul>
      <li>
        For each attachment that is in the GP2GP message:
        <ul>
          <li>Size</li>
          <li>Type</li>
          <li>Code</li>
        </ul>
      </li>
      <li>Whether that attachment was integrated into the record</li>
      <li>
        For each degrade:
        <ul>
          <li>the code that was degraded</li>
          <li>The number of times it was degraded</li>
        </ul>
      </li>
    </ul>
    <p>Our proposed specificaiton for these events follows.</p>
    <Pagination>
      <Pagination.Previous href={withPrefix("rfcs/RFC0001_gp2gp_mi/vision")}>
        Vision
      </Pagination.Previous>
      <Pagination.Next
        href={withPrefix("rfcs/RFC0001_gp2gp_mi/mandatory_events")}
      >
        Mandatory Events
      </Pagination.Next>
    </Pagination>
  </PageWithSideMenu>
)

export default Page
