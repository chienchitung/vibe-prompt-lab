
export interface LocalizedText {
  zh: string;
  en: string;
}

export interface LocalizedTextArray {
  zh: string[];
  en: string[];
}

export interface Framework {
  id: string;
  name: LocalizedText;
  category: LocalizedText;
  components: LocalizedTextArray;
  description: LocalizedText;
  example: {
    title: LocalizedText;
    code: LocalizedText;
  };
}

export type GroupedFrameworks = {
  [category: string]: Framework[];
};
