export type OpenSeaAsset = {
  readonly token_id: string;
  readonly image_url: string;
  readonly image_preview_url: string;
  readonly image_thumbnail_url: string;
  readonly image_original_url: string;
};

export type OpenSeaAssets = {
  readonly assets: readonly OpenSeaAsset[];
};

export type Lobster = {
  readonly isInitialMinter: boolean;
}
