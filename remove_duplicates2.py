def fungsi_ku(x):
  return list(dict.fromkeys(x))

daftar_ku = fungsi_ku(["a", "b", "a", "c", "c"])

print(daftar_ku) 
