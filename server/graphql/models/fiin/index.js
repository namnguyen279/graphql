const { transpileSchema } = require('graphql-s2s').graphqls2s;
const { makeExecutableSchema, loadSchema, addResolversToSchema } = require('graphql-tools');
const { GraphQLFileLoader } = require('graphql-tools');

const { resolvers } = require('./resolvers');
const path = require('path');

//TODO Viewed Index
// 1. Index ticker + quý + năm
// 2. Index quý + năm

/**
 * Hướng dẫn design Template
 * -- Mỗi template được làm ra bao gồm 4 phần
 * -- 1. Create 1 view để join tất cả các data dùng cho template đó
 * -- 2. Hệ thống cache để cache các query gọi là snapshot của time series đó,
 * -- 3. 1 graphql query để trả về chính xác template đó
 * -- 4. trigger để release cache, lấy lại data -- TBA
 * Note: Template được design chỉ để snapshot 1 khoảng thời gian cố định để optimize tốc độ, ko lạm dụng lưu nhiều thứ quá dynamic lên cache vào cache
 */

function createViewsOnStartup() {
  // await sequelize.query(`
  //   CREATE OR REPLACE VIEW viewname IF NOT EXIST AS
  // `);
}

async function makeSchema() {
  try {
    let type = await loadSchema(path.resolve(__dirname, './schema.graphql'), {
      loaders: [new GraphQLFileLoader()],
    });

    return addResolversToSchema(type, resolvers);
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  makeSchema,
};
