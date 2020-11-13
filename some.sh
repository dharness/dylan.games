for giffile in ./src/assets/**/*.gif; do
  mp4file="${giffile%.gif}.mp4"
  movfile="${giffile%.gif}.mov"

#   ffmpeg -i "$giffile" "$movfile" -y
#   ffmpeg -i "$giffile" "$mp4file" -y
#   ffmpeg -i "$giffile" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" "$mp4file" -y
#   ffmpeg -i "$giffile" -c:v libx264 -pix_fmt yuv420p -profile:v main -level:v 3.1 -an "$mp4file" -y
    # ffmpeg -i "$giffile" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p "$mp4file" -y
    ffmpeg -i "$mp4file" -f mov "$movfile" -y
done