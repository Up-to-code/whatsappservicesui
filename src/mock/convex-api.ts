type ApiReference = {
  readonly __path: string;
  readonly toString: () => string;
  readonly [key: string]: ApiReference | string | (() => string);
};

function createReference(path: string[] = []): ApiReference {
  return new Proxy(
    {
      __path: path.join("."),
      toString: () => path.join("."),
    },
    {
      get(target, property) {
        if (property in target) {
          return target[property as keyof ApiReference];
        }
        if (typeof property === "symbol") {
          return undefined;
        }
        return createReference([...path, property]);
      },
    }
  );
}

const rawApi = createReference() as any;

export const api = {
  auth: rawApi.auth,
  stats: rawApi.stats,
  whatsappNumbers: rawApi.whatsappNumbers,
  users: rawApi.users,
  contacts: rawApi.contacts,
  chat: rawApi.chat,
  notifications: rawApi.notifications,
  campaigns: rawApi.campaigns,
  templates: rawApi.templates,
  templateStore: rawApi.templateStore,
  ai_config: rawApi.ai_config,
  ai: rawApi.ai,
  agent: rawApi.agent,
  agents: rawApi.agents,
  workflows: rawApi.workflows,
  files: rawApi.files,
  salla: rawApi.salla,
  webhookSettings: rawApi.webhookSettings,
  manualCatalog: rawApi.manualCatalog,
  system: rawApi.system,
  whatsapp: rawApi.whatsapp,
  notificationPreferences: rawApi.notificationPreferences,
  admin_seed: rawApi.admin_seed,
};

export const internal = rawApi;
export const internalApi: any = internal;
