import express from "express";
import multer from "multer";
import { registrarGato, obtenerGatos, actualizarGato, eliminarGato } from '../controllers/gato.controller.js';
// routes/gato.routes.js
import { capturarInfoSolicitud } from "../middlewares/auditoria.js";

const router = express.Router();

router.use(capturarInfoSolicitud);   // aplica a todas las rutas de este router

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post("/gato", upload.single("imagen"), registrarGato);

router.put(
  "/gato/:id",
  upload.single("imagen"),
  actualizarGato
);
router.use(capturarInfoSolicitud);   // aplica a todas las rutas de este router
router.get('/gatos', obtenerGatos);

router.delete("/gato/:id", eliminarGato);

export default router;
