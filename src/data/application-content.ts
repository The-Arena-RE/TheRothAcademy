import type { PlanId } from "./apply-content";

export type FieldType = "text" | "email" | "tel" | "date" | "textarea" | "select" | "radio" | "ssn";

export type FieldOption = { value: string; label: string };

export type ApplicationField = {
  id: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: FieldOption[];
  helper?: string;
  placeholder?: string;
  /** Only rendered when this returns true, given the section's current values. */
  showIf?: (values: Record<string, string>) => boolean;
};

export type ApplicationSectionId = "personal_info" | "spouse_info" | "business_info" | "retirement_accounts" | "setup_details";

export type ApplicationSection = {
  id: ApplicationSectionId;
  title: string;
  subtitle?: string;
  fields: ApplicationField[];
};

const YES_NO: FieldOption[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const PERSONAL_INFO: ApplicationSection = {
  id: "personal_info",
  title: "Your Information",
  subtitle: "Your legal name, address, and identifying details for the order form.",
  fields: [
    { id: "middle_name", label: "Middle Name or Initial", type: "text" },
    { id: "suffix", label: "Suffix", type: "text", placeholder: "Jr., Sr., III..." },
    { id: "date_of_birth", label: "Date of Birth", type: "date", required: true },
    { id: "ssn", label: "Social Security Number", type: "ssn", required: true, helper: "Encrypted before storage. Never shown again once saved." },
    { id: "street_address", label: "Street Address", type: "text", required: true },
    { id: "unit", label: "Apartment or Unit", type: "text" },
    { id: "county", label: "County", type: "text", required: true },
    { id: "city", label: "City", type: "text", required: true },
    { id: "state", label: "State", type: "text", required: true },
    { id: "zip", label: "ZIP Code", type: "text", required: true },
    { id: "mailing_different", label: "Is your mailing address different from above?", type: "radio", options: YES_NO, required: true },
    { id: "mailing_street", label: "Mailing Street Address", type: "text", showIf: (v) => v.mailing_different === "yes" },
    { id: "mailing_city", label: "Mailing City", type: "text", showIf: (v) => v.mailing_different === "yes" },
    { id: "mailing_state", label: "Mailing State", type: "text", showIf: (v) => v.mailing_different === "yes" },
    { id: "mailing_zip", label: "Mailing ZIP", type: "text", showIf: (v) => v.mailing_different === "yes" },
    { id: "phone_alternate", label: "Alternate Phone", type: "tel" },
    { id: "fax", label: "Fax", type: "text" },
  ],
};

const SPOUSE_INFO: Record<PlanId, ApplicationSection> = {
  "401k": {
    id: "spouse_info",
    title: "Spouse & Co-Trustee",
    subtitle: "Only needed if your spouse will serve as co-trustee of the plan.",
    fields: [
      { id: "has_cotrustee", label: "Will your spouse serve as co-trustee?", type: "radio", options: YES_NO, required: true },
      { id: "spouse_name", label: "Spouse's Full Legal Name", type: "text", required: true, showIf: (v) => v.has_cotrustee === "yes" },
      { id: "spouse_dob", label: "Spouse's Date of Birth", type: "date", required: true, showIf: (v) => v.has_cotrustee === "yes" },
      {
        id: "spouse_note",
        label: "Spouse's SSN",
        type: "text",
        helper: "Collected securely by a specialist on the call before documents are finalized — no need to enter it here.",
        showIf: (v) => v.has_cotrustee === "yes",
      },
      { id: "spouse_phone", label: "Spouse's Phone", type: "tel", required: true, showIf: (v) => v.has_cotrustee === "yes" },
      { id: "spouse_alternate_phone", label: "Spouse's Alternate Phone", type: "tel", showIf: (v) => v.has_cotrustee === "yes" },
      { id: "spouse_email", label: "Spouse's Email", type: "email", required: true, showIf: (v) => v.has_cotrustee === "yes" },
      { id: "spouse_participates", label: "Will the co-trustee also participate in the plan?", type: "radio", options: YES_NO, showIf: (v) => v.has_cotrustee === "yes" },
    ],
  },
  ira: {
    id: "spouse_info",
    title: "Spouse as Additional Manager",
    subtitle: "Only needed if your spouse will also serve as a manager of the LLC.",
    fields: [
      { id: "has_spouse_manager", label: "Will your spouse also serve as a manager of the LLC?", type: "radio", options: YES_NO, required: true },
      { id: "additional_manager_name", label: "Additional Manager's Full Legal Name", type: "text", required: true, showIf: (v) => v.has_spouse_manager === "yes" },
      { id: "additional_manager_street", label: "Street Address", type: "text", required: true, showIf: (v) => v.has_spouse_manager === "yes" },
      { id: "additional_manager_city", label: "City", type: "text", required: true, showIf: (v) => v.has_spouse_manager === "yes" },
      { id: "additional_manager_state", label: "State", type: "text", required: true, showIf: (v) => v.has_spouse_manager === "yes" },
      { id: "additional_manager_zip", label: "ZIP", type: "text", required: true, showIf: (v) => v.has_spouse_manager === "yes" },
      { id: "additional_manager_email", label: "Additional Manager's Email", type: "email", required: true, showIf: (v) => v.has_spouse_manager === "yes" },
    ],
  },
};

const BUSINESS_INFO: Record<PlanId, ApplicationSection> = {
  "401k": {
    id: "business_info",
    title: "Business Information",
    subtitle: "The business that will adopt this plan.",
    fields: [
      { id: "company_name", label: "Company / Plan Sponsor Legal Name", type: "text", required: true },
      { id: "business_ein", label: "Business EIN", type: "text", helper: "Leave blank if not yet assigned." },
      { id: "business_address", label: "Business Address", type: "text", required: true },
      {
        id: "entity_type",
        label: "Entity Type",
        type: "select",
        required: true,
        options: [
          { value: "corporation", label: "Corporation" },
          { value: "s_corporation", label: "S Corporation" },
          { value: "llc", label: "LLC" },
          { value: "sole_proprietorship", label: "Sole Proprietorship" },
          { value: "partnership", label: "Partnership" },
        ],
      },
      { id: "state_of_organization", label: "State of Organization", type: "text", required: true },
      { id: "business_activity", label: "Business Activity", type: "text", required: true },
      { id: "trade_name", label: "Trade Name (DBA), if any", type: "text" },
      { id: "owns_other_business", label: "Do you (or related individuals) own 80% or more of another business?", type: "radio", options: YES_NO, required: true },
      {
        id: "related_business_details",
        label: "Related Business Details",
        type: "textarea",
        helper: "Business names, ownership percentages, and relationships.",
        showIf: (v) => v.owns_other_business === "yes",
      },
    ],
  },
  ira: {
    id: "business_info",
    title: "LLC Information",
    subtitle: "The LLC your IRA will own.",
    fields: [
      { id: "llc_name_choice_1", label: "First LLC Name Choice", type: "text", required: true },
      { id: "llc_name_choice_2", label: "Second LLC Name Choice", type: "text", required: true },
      { id: "llc_state_of_formation", label: "State of Formation", type: "text", required: true },
      { id: "llc_principal_address", label: "Principal Business Address", type: "text", required: true },
      { id: "llc_existing_status", label: "Is this a new or existing LLC?", type: "radio", options: [{ value: "new", label: "New" }, { value: "existing", label: "Existing" }], required: true },
      { id: "llc_existing_ein", label: "Existing EIN", type: "text", showIf: (v) => v.llc_existing_status === "existing" },
      { id: "is_primary_manager", label: "Will you be the primary manager of the LLC?", type: "radio", options: YES_NO, required: true },
      { id: "manager_name", label: "Primary Manager's Full Legal Name", type: "text", required: true, showIf: (v) => v.is_primary_manager === "no" },
      { id: "manager_street", label: "Manager's Street Address", type: "text", required: true, showIf: (v) => v.is_primary_manager === "no" },
      { id: "manager_city", label: "Manager's City", type: "text", required: true, showIf: (v) => v.is_primary_manager === "no" },
      { id: "manager_state", label: "Manager's State", type: "text", required: true, showIf: (v) => v.is_primary_manager === "no" },
      { id: "manager_zip", label: "Manager's ZIP", type: "text", required: true, showIf: (v) => v.is_primary_manager === "no" },
      { id: "manager_contact", label: "Manager's Best Contact (Phone or Email)", type: "text", required: true, showIf: (v) => v.is_primary_manager === "no" },
    ],
  },
};

const RETIREMENT_ACCOUNTS: ApplicationSection = {
  id: "retirement_accounts",
  title: "Existing Retirement Accounts",
  subtitle: "Tell us about any accounts you plan to transfer or roll over.",
  fields: [
    {
      id: "will_transfer",
      label: "Will you transfer or roll over retirement savings?",
      type: "radio",
      options: [...YES_NO, { value: "not_sure", label: "I'm not sure" }],
      required: true,
    },
    { id: "current_institution", label: "Current Institution", type: "text", required: true, showIf: (v) => v.will_transfer === "yes" },
    { id: "account_type", label: "Account or Plan Type", type: "text", required: true, showIf: (v) => v.will_transfer === "yes" },
    { id: "name_on_account", label: "Name on Account", type: "text", required: true, showIf: (v) => v.will_transfer === "yes" },
    {
      id: "source_classification",
      label: "Source Classification",
      type: "select",
      options: [
        { value: "traditional", label: "Traditional" },
        { value: "roth", label: "Roth" },
        { value: "other", label: "Other" },
      ],
      showIf: (v) => v.will_transfer === "yes",
    },
    { id: "approximate_amount", label: "Approximate Amount", type: "text", showIf: (v) => v.will_transfer === "yes" },
    {
      id: "full_or_partial",
      label: "Full or Partial Transfer?",
      type: "radio",
      options: [{ value: "full", label: "Full" }, { value: "partial", label: "Partial" }],
      showIf: (v) => v.will_transfer === "yes",
    },
    {
      id: "additional_accounts_notes",
      label: "Additional Accounts",
      type: "textarea",
      helper: "List any other accounts you'd like to transfer — institution, type, and approximate amount.",
      showIf: (v) => v.will_transfer === "yes",
    },
  ],
};

const SETUP_DETAILS: Record<PlanId, ApplicationSection> = {
  "401k": {
    id: "setup_details",
    title: "Plan Setup Details",
    fields: [{ id: "intended_plan_name", label: "Intended Plan Name", type: "text", required: true }],
  },
  ira: {
    id: "setup_details",
    title: "Setup Details",
    fields: [
      { id: "ein_assistance_needed", label: "Do you need assistance obtaining an EIN for the LLC?", type: "radio", options: YES_NO, required: true },
      {
        id: "banking_notes",
        label: "Banking Preferences",
        type: "textarea",
        helper: "Any preferences for the LLC's bank account setup.",
      },
    ],
  },
};

export function getApplicationSections(plan: PlanId): ApplicationSection[] {
  return [PERSONAL_INFO, SPOUSE_INFO[plan], BUSINESS_INFO[plan], RETIREMENT_ACCOUNTS, SETUP_DETAILS[plan]];
}

export type SummaryLine = { fieldId: string; label: string; value: string };

// Shared by the review screen and the GHL completion summary, so both read
// a section's answers the same way: skip the SSN (never shown back),
// skip unanswered fields, and resolve radio/select values to their
// display labels instead of raw option codes.
export function summarizeSectionValues(section: ApplicationSection, values: Record<string, string>): SummaryLine[] {
  const lines: SummaryLine[] = [];
  for (const field of section.fields) {
    if (field.type === "ssn") continue;
    const raw = values[field.id];
    if (!raw) continue;
    const label = field.options?.find((o) => o.value === raw)?.label ?? raw;
    lines.push({ fieldId: field.id, label: field.label, value: label });
  }
  return lines;
}
