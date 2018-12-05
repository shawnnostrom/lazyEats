select a.id, a.name, a.image, a.url
from favorites a
join users b ON b.id = $1;