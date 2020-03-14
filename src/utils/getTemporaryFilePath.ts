import { v1 as uuidv1 } from "uuid";

const getTemporaryFilePath = (): { tempFilePath: string; fileId: string } => {
  const uuid = uuidv1();
  return {
    tempFilePath: `/tmp/${uuid}.json`,
    fileId: uuid
  };
};

export default getTemporaryFilePath;
