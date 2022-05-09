const string =
  "#access_token=BQC_KS6D_g6smmcDqtYlv80iAi7u3rGo1WKzDWcQAfPTuNOYZ6XllARSHtzeoV3sVT91HfUJVS0l_K0M2vi0zglYIU25XSo0gH3Tec290FqYdFdcLQ2cbpBgdq3_tKrBFueWOACteBJ-BrT6u__qDnPwJsqb-7yWLXM&token_type=Bearer&expires_in=3600";

console.log(string.split("=")[1].slice(0, -11));
