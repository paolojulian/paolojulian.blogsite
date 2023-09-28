import algoliasearchConstants from "./algoliasearch-client.constants";
import algoliasearch from "algoliasearch";

const algoliasearchClient = algoliasearch(
  algoliasearchConstants.applicationId,
  algoliasearchConstants.searchAPIKey
);

export default algoliasearchClient;