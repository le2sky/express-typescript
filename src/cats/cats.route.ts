import { Cat, CatType } from "./cats.model";
import { Router } from "express";
import * as express from "express";
import {
  createCat,
  deleteCat,
  patchCat,
  readAllcat,
  readCat,
  updateCat,
} from "./cats.service";

const router = Router();

//* READ 고양이 전체 데이터 조회
router.get("/cats", readAllcat);

//* READ 특정 고양이 데이터 조회 (동적 라우팅)
router.get("/cats/:id", readCat);

//* CREATE 새로운 고양이 추가
router.post("/cats", createCat);

//* UPDATE 고양이 데이터 업데이트 => PUT
router.put("/cats/:id", updateCat);

//* UPDATE 고양이 데이터 부분 업데이트 => PATCH
router.patch("/cats/:id", patchCat);

//* DELETE 고양이 데이터 삭제 => DELETE
router.delete("/cats/:id", deleteCat);

export default router;
