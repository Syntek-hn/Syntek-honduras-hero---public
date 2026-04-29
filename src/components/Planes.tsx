import { useState } from "react";
import { Check, Crown, Zap, Star, Rocket, Sparkles, ArrowRight, Send, X, ChevronDown, Minus } from "lucide-react";
import { useT, useTa } from "@/i18n/provider";

// Brand color: violet #7C3AED (matches Syntek platform).
const BRAND = "#7C3AED";
const BRAND_DARK = "#6D28D9";

type PlanKey = "starter" | "pro" | "business" | "enterprise" | "custom";

const PLAN_CONFIG: Array<{
  key: PlanKey;
  icon: typeof Zap;
  price: number;
  annualPrice: number;
  popular: boolean;
  contactSales: boolean;
}> = [
  { key: "starter",    icon: Zap,       price: 49,  annualPrice: 39,  popular: false, contactSales: false },
  { key: "pro",        icon: Star,      price: 99,  annualPrice: 79,  popular: true,  contactSales: false },
  { key: "business",   icon: Rocket,    price: 199, annualPrice: 159, popular: false, contactSales: false },
  { key: "enterprise", icon: Crown,     price: 399, annualPrice: 319, popular: false, contactSales: false },
  { key: "custom",     icon: Sparkles,  price: 0,   annualPrice: 0,   popular: false, contactSales: true  },
];

const PLAN_KEYS_FOR_PREV: Record<PlanKey, PlanKey | null> = {
  starter: null,
  pro: "starter",
  business: "pro",
  enterprise: "business",
  custom: "enterprise",
};

// Comparison rows grouped by category. Keys map to i18n.
const COMPARE_GROUPS: Array<{ id: string; rows: string[] }> = [
  { id: "messaging", rows: ["channels", "templates", "menus", "csat"] },
  { id: "ai",        rows: ["iaAgents", "convs", "intents", "rag"] },
  { id: "team",      rows: ["humans", "manager"] },
  { id: "sales",     rows: ["catalog", "campaigns", "pipeline", "internalAi", "export"] },
  { id: "automation",rows: ["calendar", "integrations", "externalSystems", "automations"] },
  { id: "reports",   rows: ["monthlyReport", "agentReports", "executiveReports", "branding"] },
  { id: "enterprise",rows: ["developerAccess", "sso", "sla", "accountManager", "support247"] },
  { id: "custom",    rows: ["multiPhone", "multiLocation", "whiteLabel"] },
];

const REGISTER_URL = "https://syntek-platform.vercel.app/register";

export default function Planes() {
  const t = useT();
  const ta = useTa();
  const [annual, setAnnual] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="precios" className="py-24 px-6 bg-gradient-section">
      <div className="max-w-6xl mx-auto">
        {/* ═══════ HERO ═══════ */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            {t("pricing.subtitle")}
          </p>

          {/* Annual / monthly toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-medium ${annual ? "text-slate-400" : "text-slate-900"}`}>
              {t("pricing.monthly")}
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              aria-label="toggle annual pricing"
              className="relative w-12 h-6 rounded-full transition-colors"
              style={{ backgroundColor: annual ? BRAND : "#D1D5DB" }}
            >
              <div
                className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform"
                style={{ left: annual ? 26 : 2 }}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-slate-900" : "text-slate-400"}`}>
              {t("pricing.annual")}
            </span>
            {annual && (
              <span
                className="text-xs font-bold px-2 py-1 rounded-full text-white"
                style={{ backgroundColor: BRAND }}
              >
                {t("pricing.save20")}
              </span>
            )}
          </div>
        </div>

        {/* ═══════ 5 PRICING CARDS ═══════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {PLAN_CONFIG.map((plan) => {
            const Icon = plan.icon;
            const price = annual ? plan.annualPrice : plan.price;
            const annualTotal = plan.annualPrice * 12;
            const features = ta(`pricing.${plan.key}.features`);
            const prevKey = PLAN_KEYS_FOR_PREV[plan.key];
            const prevName = prevKey ? t(`pricing.${prevKey}.name`) : "";

            const isPopular = plan.popular;
            const isCustom = plan.contactSales;

            return (
              <div
                key={plan.key}
                className={`relative rounded-2xl p-5 flex flex-col transition-all ${
                  isPopular
                    ? "shadow-xl scale-[1.02]"
                    : "border border-slate-200 bg-white"
                }`}
                style={
                  isPopular
                    ? { backgroundColor: "white", border: `2px solid ${BRAND}`, boxShadow: `0 10px 30px -10px ${BRAND}33` }
                    : isCustom
                    ? { backgroundColor: "#0F172A", color: "white", border: "1px solid #334155" }
                    : undefined
                }
              >
                {isPopular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap"
                    style={{ backgroundColor: BRAND }}
                  >
                    ⭐ {t("pricing.popular")}
                  </span>
                )}

                {/* Plan header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={18} style={{ color: isCustom ? "#FBBF24" : BRAND }} />
                    <h3
                      className="text-lg font-bold"
                      style={{ color: isCustom ? "white" : "#0F172A" }}
                    >
                      {t(`pricing.${plan.key}.name`)}
                    </h3>
                  </div>
                  <p
                    className="text-xs font-medium"
                    style={{ color: isCustom ? "#FBBF24" : BRAND }}
                  >
                    {t(`pricing.${plan.key}.tagline`)}
                  </p>
                  <p
                    className={`text-sm mt-2 ${isCustom ? "" : "text-slate-500"}`}
                    style={isCustom ? { color: "#94A3B8" } : undefined}
                  >
                    {t(`pricing.${plan.key}.desc`)}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-5">
                  {isCustom ? (
                    <p className="text-lg font-semibold text-white">
                      {t("pricing.custom.priceLabel")}
                    </p>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-slate-900">${price}</span>
                        <span className="text-sm text-slate-500">{t("pricing.perMonth")}</span>
                      </div>
                      {annual && (
                        <p className="text-xs text-slate-500 mt-1">
                          ${annualTotal.toLocaleString()}{t("pricing.perYear")}
                        </p>
                      )}
                    </>
                  )}
                </div>

                {/* Features list */}
                <ul className="space-y-2 mb-6 flex-1">
                  {prevKey && (
                    <li
                      className="text-xs font-semibold pb-2 mb-1 border-b"
                      style={{
                        color: isCustom ? "#FBBF24" : BRAND,
                        borderColor: isCustom ? "#334155" : "#F1F5F9",
                      }}
                    >
                      {t("pricing.allFromPrev").replace("{prev}", prevName)}
                    </li>
                  )}
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check
                        size={15}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: isCustom ? "#FBBF24" : BRAND }}
                      />
                      <span
                        className="text-[13px] leading-snug"
                        style={isCustom ? { color: "#CBD5E1" } : { color: "#475569" }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {isCustom ? (
                  <button
                    onClick={() => setShowForm(true)}
                    className="block text-center py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: "#FBBF24", color: "#0F172A" }}
                  >
                    {t("pricing.ctaSales")}
                  </button>
                ) : (
                  <a
                    href={REGISTER_URL}
                    className={`text-center py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                      isPopular ? "text-white" : ""
                    }`}
                    style={
                      isPopular
                        ? { backgroundColor: BRAND }
                        : { backgroundColor: "#F1F5F9", color: "#0F172A" }
                    }
                  >
                    {t("pricing.ctaTrial")} <ArrowRight size={14} />
                  </a>
                )}

                <p
                  className="text-[10px] text-center mt-3"
                  style={isCustom ? { color: "#64748B" } : { color: "#94A3B8" }}
                >
                  {isCustom ? t("pricing.salesNote") : t("pricing.trialNote")}
                </p>
              </div>
            );
          })}
        </div>

        {/* ═══════ COMPARE TABLE TOGGLE ═══════ */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowCompare(!showCompare)}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
            style={{ color: BRAND }}
          >
            {t("pricing.compareTitle")}
            <ChevronDown
              size={16}
              className="transition-transform"
              style={{ transform: showCompare ? "rotate(180deg)" : "rotate(0)" }}
            />
          </button>
          <p className="text-xs text-slate-500 mt-1">{t("pricing.compareSubtitle")}</p>
        </div>

        {showCompare && <CompareTable />}

        {/* ═══════ WHY SYNTEK ═══════ */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
            {t("pricing.whyTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[0, 1, 2].map((i) => (
              <WhyItem key={i} index={i} />
            ))}
          </div>
        </div>

        {/* ═══════ FAQ ═══════ */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-8">
            {t("pricing.faqTitle")}
          </h3>
          <div className="space-y-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <FaqRow
                key={i}
                index={i}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom contact modal */}
      {showForm && <ContactModal onClose={() => setShowForm(false)} />}
    </section>
  );
}

// ─── Compare table ─────────────────────────────────────────────────

function CompareTable() {
  const t = useT();
  const planKeys: PlanKey[] = ["starter", "pro", "business", "enterprise", "custom"];

  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full text-left bg-white border border-slate-200 rounded-2xl overflow-hidden text-sm">
        <thead className="bg-slate-50">
          <tr>
            <th className="py-3 px-4 font-semibold text-slate-700">{t("pricing.compareCol.feature")}</th>
            {planKeys.map((k) => (
              <th
                key={k}
                className="py-3 px-3 font-semibold text-center"
                style={{ color: k === "pro" ? BRAND : "#475569" }}
              >
                {t(`pricing.compareCol.${k}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARE_GROUPS.map((group) => (
            <CompareGroup key={group.id} groupId={group.id} rowKeys={group.rows} planKeys={planKeys} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CompareGroup({
  groupId,
  rowKeys,
  planKeys,
}: {
  groupId: string;
  rowKeys: string[];
  planKeys: PlanKey[];
}) {
  const t = useT();
  return (
    <>
      <tr className="bg-slate-50">
        <td colSpan={6} className="py-2 px-4 text-[11px] uppercase tracking-wider font-bold text-slate-500">
          {t(`pricing.compareGroup.${groupId}`)}
        </td>
      </tr>
      {rowKeys.map((rowKey) => (
        <tr key={rowKey} className="border-t border-slate-100">
          <td className="py-2.5 px-4 text-slate-700">{t(`pricing.compareRows.${rowKey}.label`)}</td>
          {planKeys.map((pk) => (
            <CompareCell key={pk} rowKey={rowKey} planKey={pk} />
          ))}
        </tr>
      ))}
    </>
  );
}

function CompareCell({ rowKey, planKey }: { rowKey: string; planKey: PlanKey }) {
  const t = useT();
  const value = t(`pricing.compareRows.${rowKey}.${planKey}`);

  if (value === "yes") {
    return (
      <td className="py-2.5 px-3 text-center">
        <Check size={16} className="inline" style={{ color: BRAND }} />
      </td>
    );
  }
  if (value === "no") {
    return (
      <td className="py-2.5 px-3 text-center">
        <Minus size={14} className="inline text-slate-300" />
      </td>
    );
  }
  return (
    <td
      className="py-2.5 px-3 text-center text-[13px]"
      style={{ color: planKey === "pro" ? BRAND : "#475569", fontWeight: 500 }}
    >
      {value}
    </td>
  );
}

// ─── Why Syntek item ───────────────────────────────────────────────

function WhyItem({ index }: { index: number }) {
  const t = useT();
  return (
    <div className="text-center px-4">
      <div
        className="w-12 h-12 mx-auto rounded-2xl flex items-center justify-center mb-4"
        style={{ backgroundColor: `${BRAND}15` }}
      >
        <Sparkles size={20} style={{ color: BRAND }} />
      </div>
      <h4 className="font-bold text-slate-900 mb-2">{t(`pricing.whyItems.${index}.title`)}</h4>
      <p className="text-sm text-slate-500">{t(`pricing.whyItems.${index}.desc`)}</p>
    </div>
  );
}

// ─── FAQ ───────────────────────────────────────────────────────────

function FaqRow({
  index,
  open,
  onToggle,
}: {
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const t = useT();
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-sm font-semibold text-slate-900">
          {t(`pricing.faq.${index}.q`)}
        </span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 ml-3 text-slate-400 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-slate-600">{t(`pricing.faq.${index}.a`)}</div>
      )}
    </div>
  );
}

// ─── Contact sales modal ───────────────────────────────────────────

function ContactModal({ onClose }: { onClose: () => void }) {
  const t = useT();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">{t("pricing.ctaSales")}</h3>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-100">
            <X size={18} className="text-slate-400" />
          </button>
        </div>
        <p className="text-sm text-slate-500 mb-4">{t("pricing.custom.desc")}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            window.open(
              `mailto:info@syntekhn.com?subject=Custom%20-%20${encodeURIComponent(
                fd.get("empresa") as string,
              )}&body=${encodeURIComponent(
                `Nombre: ${fd.get("nombre")}\nEmail: ${fd.get("email")}\nEmpresa: ${fd.get("empresa")}\nAgentes aprox: ${fd.get("agentes")}\n\n${fd.get("mensaje")}`,
              )}`,
              "_blank",
            );
            onClose();
          }}
          className="space-y-3"
        >
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-1 outline-none"
            style={{ borderColor: "#E2E8F0" }}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-1 outline-none"
          />
          <input
            name="empresa"
            type="text"
            placeholder="Empresa"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-1 outline-none"
          />
          <input
            name="agentes"
            type="text"
            placeholder="Número de agentes aproximado"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-1 outline-none"
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje (opcional)"
            rows={3}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-1 outline-none resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 text-white"
            style={{ backgroundColor: BRAND }}
          >
            <Send size={14} /> Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
