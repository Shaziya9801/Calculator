"use client"
import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
type MatrixCell = number |any;

const MatrixCalculator: React.FC = () => {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [matrices, setMatrices] = useState<MatrixCell[][][]>([]);
  const [resultMatrix, setResultMatrix] = useState<MatrixCell[][]>([]);

  const handleGenerate = () => {
    const matrixA = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: cols }, (_, j) => i + j)
    );
    const matrixB = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: cols }, (_, j) => i * j)
    );
    setMatrices([matrixA, matrixB]);
    setResultMatrix([]);
  };

  const handleMatrixChange = (matrixIndex: number, rowIndex: number, colIndex: number, value: string) => {
    const updatedMatrices = matrices.map((matrix, idx) =>
      idx === matrixIndex
        ? matrix.map((row, rIdx) =>
            rIdx === rowIndex
              ? row.map((cell, cIdx) => (cIdx === colIndex ? (value === '' ? '' : Number(value)) : cell))
              : row
          )
        : matrix
    );
    setMatrices(updatedMatrices);
  };

  const addMatrices = () => {
    const newMatrix = matrices[0]?.map((row, i) =>
      row.map((cell, j) => (Number(cell) + Number(matrices[1][i][j])) || 0)
    );
    setResultMatrix(newMatrix);
  };

  const subtractMatrices = () => {
    const newMatrix = matrices[0]?.map((row, i) =>
      row?.map((cell, j) => (Number(cell) - Number(matrices[1][i][j])) || 0)
    );
    setResultMatrix(newMatrix);
  };

  const multiplyMatrices = () => {
    const newMatrix = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: cols }, (_, j) =>
        matrices[0][i].reduce((sum, _, k) => sum + Number(matrices[0][i][k]) * Number(matrices[1][k][j]), 0)
      )
    );
    setResultMatrix(newMatrix);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Matrix Calculator</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField label="Rows" type="number" value={rows} onChange={(e) => setRows(Number(e.target.value))} />
        </Grid>
        <Grid item>
          <TextField label="Columns" type="number" value={cols} onChange={(e) => setCols(Number(e.target.value))} />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleGenerate}>Generate Matrices</Button>
        </Grid>
      </Grid>
      
      <Grid container spacing={2} marginTop={3}>
        {matrices?.map((matrix, index) => (
          <Grid item xs={6} key={index}>
            <Typography variant="h6">Matrix {index + 1}</Typography>
            <Grid container>
              {matrix.map((row, i) => (
                <Grid container key={i}>
                  {row.map((cell, j) => (
                    <TextField
                      key={`${i}-${j}`}
                      value={cell}
                      type="number"
                      onChange={(e) => handleMatrixChange(index, i, j, e.target.value)}
                      sx={{ width: 60, margin: 0.5 }}
                    />
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} marginTop={2}>
        <Grid item>
          <Button variant="contained" onClick={addMatrices}>Add</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={subtractMatrices}>Subtract</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={multiplyMatrices}>Multiply</Button>
        </Grid>
      </Grid>

      {resultMatrix.length > 0 && (
        <div>
          <Typography variant="h6" marginTop={2}>Result Matrix</Typography>
          <Grid container>
            {resultMatrix.map((row, i) => (
              <Grid container key={i}>
                {row.map((cell, j) => (
                  <TextField key={`${i}-${j}`} value={cell} sx={{ width: 60, margin: 0.5 }} disabled />
                ))}
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default MatrixCalculator;
