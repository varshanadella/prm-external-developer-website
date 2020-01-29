import React from "react"
import Header from "../../components/header"
import "../index.scss"

const Layout = ({ children }) => (
  <React.Fragment>
    <Header
      serviceName={"Patient Record Migration: Developer website"}
      phaseBanner={{
        text:
          "This website and the standards contained is in early development. Whilst we hope you find it useful we would not recommend using this as your only source of guidance for developing.",
        tag: "Development:",
      }}
    />
    <div className="nhsuk-width-container ">
      <main className="nhsuk-main-wrapper main-content ">
        <PermenantMenu />
        <article>
          <h2>GP2GP 2.3: Enhanced Managment Information (MI)</h2>
          <a name="vision"></a>
          <h3>Vision</h3>
          <h4>Motivation</h4>
          <p>
            While the existing management information specification provides
            some usable data for tracking trends in GP2GP, there are several
            drawbacks we have experienced working with it in practice
            <ul>
              <li>
                Lack of extensibility - Due to the high amount of cross
                referencing to the structure and numbering scheme of the MI
                fields, it is hard to add new data to the existing
                specification.
              </li>
              <li>
                Inability to represent structured data - Because CSV is used as
                a serialisation format, it's not easy to add data that is
                structured or list like (e.g attachment metadata)
              </li>
              <li>
                Unreported information - Not all suppliers are sending all state
                changes associated with a registration, so data is often missing
                and the accuracy of our analysis is reduced. (eg TPP missing
                acknowledgements)
              </li>
              <li>
                Challenges de-duplicating records - There is no unique
                identifier that can be used to de-duplicate the MI records in
                the way outlined by the existing specification
              </li>
              <li>
                Lack of fidelity - While representing the state of each
                registration as a single MI record allows for analysis to be
                somewhat simplified, it is often hard to determine the exact
                sequence of events that lead to GP2GP succeeding or failing.
              </li>
              <li>
                Scope of data capture - When considering patient record
                migration as a whole, registration data is important for
                measuring the overall quality of the patient experience.
                Failures in GP2GP are often conflated with registration
                failures. It would be desirable to increase the scope of what we
                capture to include this information also.
              </li>
              <li>
                Delay in receiving updates - Currently we have to wait at least
                a month to get the MI data from all practices. This limits our
                ability to build useful data products on top of the MI data.{" "}
              </li>
            </ul>
          </p>
          <h4>Technical Design</h4>
          <p>
            To address the above concerns, we propose the following technical
            design choices for capturing enhanced management information.
          </p>
          <h5>JSON instead of CSV</h5>
          <p>
            JSON objects are to be used as the serialisation format for MI data.
            When serialising data to a CSV, the ordering of the columns is used
            to attribute meaning to each data value (especially if there is not
            a header row in the CSV file). This can make it harder to insert a
            new column in the logically correct place, as any code which
            processes this CSV now potentially needs to be updated to take into
            account the new ordering. In the existing specification, this is
            further complicated as the order of the requirements is directly
            reflected by the CSV. Encoding the same information into a JSON
            record does not suffer from this limitation as the order of values
            are not used for conveying meaning. It will therefore be
            considerably easier to evolve the schema. In addition to this we
            also recommend fully decoupling the numbering and ordering of the
            requirements from the data schema. For example, if the specification
            dictates in requestor requirement 2 that a requesting system records
            the conversation id, the field in the data schema should be
            something like ‘conversation_id’ instead of ‘RR2’. The enhanced MI
            specification will contain a data schema mandating what these fields
            should be named.
          </p>
          <h5>Distinct records for different events</h5>
          <p>
            Instead of representing management information as a single record,
            different parts of the MI will be captured at various points
            throughout GP2GP . This data will be modeled using an event sourcing
            style methodology in which data is organised into events that align
            closely to the business process. Capturing data in this way will
            improve our ability to analyse different kinds of GP2GP failure
            modes. This will also make it simpler to capture new kinds of
            information, as instead placing more data into a single record, new
            events can be created as needed.
          </p>
          <h5>Capture every event (aka capture each state change)</h5>
          <p>
            Every user or system activity triggers a new event or otherwise
            progresses the registration through the service flow, MI information
            must be captured for reporting.
          </p>
          <h5>Registration ID</h5>
          <p>
            To allow events related to a single registration to be correlated,
            each event must have a field containing an anonymous identifier that
            is unique to each registration.
          </p>
          <h5>Near real time</h5>
          <p>
            MI Events must be submitted when the corresponding action they
            expose data for has been completed. For example a ‘ehr_integrated’
            event must be sent as soon as the requesting system integrates an
            EHR. Events are to be submitted via HTTPS POST request to the GP2GP
            enhanced MI endpoint. To simplify the initial implementation,
            systems do not have to retry if this request fails.
          </p>
        </article>
      </main>
    </div>
  </React.Fragment>
)

const PermenantMenu = ({ children }) => (
  <nav
    className="nhsuk-contents-list permenant-menu"
    role="navigation"
    aria-label="Pages in this guide"
  >
    <h2 className="nhsuk-u-visually-hidden">Contents</h2>
    <ol className="nhsuk-contents-list__list">
      <li className="nhsuk-contents-list__item">
        <a className="nhsuk-contents-list__link" href="/gp2gp_2.3">
          Overview
        </a>
      </li>
      <li className="nhsuk-contents-list__item">
        <a className="nhsuk-contents-list__link" href="#vision">
          Vision
        </a>
      </li>
      <li className="nhsuk-contents-list__item">
        <a className="nhsuk-contents-list__link" href="/gp2gp_2.3/scope">
          Scope
        </a>
      </li>      
    </ol>
  </nav>
)

export default Layout